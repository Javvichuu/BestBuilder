package controller;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.mail.MessagingException;

import model.Proyecto;
import model.Usuario;
import repository.UsuarioRepository;

@RestController
public class Controller {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Value("${app.rutina.key_nombre}")
	private String claveRutina;

	@Value("${ip_api_optima}")
	private String ipAPI;

	// USUARIOS LOGIN / LOGOUT / VERIFICAR / REGISTRAR
	@GetMapping("/optima/tokenUsuario")
	public ResponseEntity<Object> obtenerToken(@RequestParam(value = "token") String token) {
		Optional<Usuario> usuarioBaseDatos = usuarioRepository.findByToken(token);
		if (usuarioBaseDatos.isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(usuarioBaseDatos.get());
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
	}

	@GetMapping("/optima/obtenerUsuario")
	public ResponseEntity<Object> obtenerUsuario(@RequestParam(value = "token") String token,
			@RequestParam(value = "correo") String correo) {
		Optional<Usuario> usuarioBaseDatos = usuarioRepository.findByToken(token);
		if (usuarioBaseDatos.isPresent()) {
			Optional<Usuario> usuario = usuarioRepository.findByCorreo(correo);
			return ResponseEntity.status(HttpStatus.OK).body(usuario.get());
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
	}

	@GetMapping("/optima/verificar")
	public ResponseEntity<Object> verificarCorreo(@RequestParam(value = "correo") String correo) {
		Optional<Usuario> usuario = usuarioRepository.findByCorreo(correo);
		if (usuario.isPresent()) {
			Usuario usuarioVerificado = usuario.get();
			usuarioVerificado.setVerificado(true);
			usuarioRepository.save(usuarioVerificado);
			return ResponseEntity.ok("Email verified successfully");
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	@GetMapping("/optima/codigo")
	public ResponseEntity<Object> verificarCodigo(@RequestParam(value = "codigo") String codigo) {
		Optional<Usuario> usuarioRequest = usuarioRepository.findByCodigo(codigo);
		JSONObject response = new JSONObject();
		if (usuarioRequest.isPresent()) {
			response.put("message", "");
			return ResponseEntity.ok(response.toString());
		}
		response.put("message", "No user has been found with this code.");
		return ResponseEntity.ok(response.toString());
	}

	

	@PostMapping("/optima/cambiarContrasenya")
	public ResponseEntity<Object> cambiarContrasenya(@RequestBody Usuario request) throws NoSuchAlgorithmException {
		JSONObject response = new JSONObject();
		Optional<Usuario> usuarioOptional = usuarioRepository.findByCorreo(request.getCorreo());

		if (usuarioOptional.isPresent()) {
			Usuario usuario = usuarioOptional.get();

			if (!usuario.getCodigo().isEmpty() && usuario.getCodigo().equals(request.getCodigo())) {
				usuario.setContrasenya(usuario.encriptacionContrasenya(request.getContrasenya()));
				usuario.setCodigo("");
				usuarioRepository.save(usuario);
				response.put("message", "Password updated successfully.");
				return ResponseEntity.status(HttpStatus.OK).body(response.toString());
			} else {
				response.put("message", "Incorrect or expired code.");
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response.toString());
			}
		} else {
			response.put("message", "User not found.");
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response.toString());
		}
	}

	@PostMapping("/optima/registrar")
	ResponseEntity<Object> registrar(@RequestBody Usuario nuevoUsuario)
			throws NoSuchAlgorithmException, MessagingException, IOException {
		JSONObject response = new JSONObject();
		if (usuarioRepository.findByCorreo(nuevoUsuario.getCorreo().toLowerCase()).isPresent()) {
			response.put("message", "USER ALREADY REGISTERED");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response.toString());
		} else {
			nuevoUsuario.setCorreo(nuevoUsuario.getCorreo().toLowerCase());
			nuevoUsuario.setContrasenya(nuevoUsuario.encriptacionContrasenya(nuevoUsuario.getContrasenya()));
			usuarioRepository.save(nuevoUsuario);
			
			
			response.put("message", "Access the email to verify account");
			return ResponseEntity.status(HttpStatus.CREATED).body(response.toString());
		}
	}

	@PostMapping("/optima/login")
	ResponseEntity<Object> login(@RequestBody Usuario usuarioAccede) throws NoSuchAlgorithmException {
		Optional<Usuario> usuarioBaseDatos = usuarioRepository.comprobarLogin(usuarioAccede.getCorreo(),
				usuarioAccede.encriptacionContrasenya(usuarioAccede.getContrasenya()));
		JSONObject response = new JSONObject();
		if (usuarioBaseDatos.isPresent()) {
			Usuario usuario = usuarioBaseDatos.get();
			if (usuario.getVerificado()) {
				String token = UUID.randomUUID().toString();
				usuario.setToken(token);
				usuarioRepository.save(usuario);
				response.put("token", token);
				return ResponseEntity.status(HttpStatus.OK).body(response.toString());
			}
			response.put("message", "UNVERIFIED USER");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response.toString());
		} else {
			response.put("message", "USER IS NOT REGISTERED");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response.toString());
		}
	}

	@PostMapping("/optima/logout")
	ResponseEntity<Object> logout(@RequestBody String requestBody) {
		JSONObject jsonObject = new JSONObject(requestBody);
		JSONObject response = new JSONObject();
		Optional<Usuario> usuarioBaseDatos = usuarioRepository.findByToken(jsonObject.getString("token"));
		if (usuarioBaseDatos.isPresent()) {
			Usuario usuario = usuarioBaseDatos.get();
			usuario.setToken("");
			usuarioRepository.save(usuario);
			response.put("message", "");
			return ResponseEntity.status(HttpStatus.OK).body(response.toString());
		} else {
			response.put("message", "");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response.toString());
		}
	}

	
	
	@PostMapping("/optima/cambiarNombre")
	ResponseEntity<Object> cambiarNombre(@RequestBody String requestBody) {
		JSONObject jsonObject = new JSONObject(requestBody);
		JSONObject response = new JSONObject();

		Optional<Usuario> usuarioBaseDatos = usuarioRepository.findByToken(jsonObject.getString("token"));
		jsonObject.remove("token");
		if (usuarioBaseDatos.isPresent()) {
			Usuario usuario = usuarioBaseDatos.get();
			usuario.setNombre(jsonObject.getString("nuevoNombre"));
			usuarioRepository.save(usuario);
			response.put("message", "Name changed");
			return ResponseEntity.status(HttpStatus.OK).body(response.toString());
		} else {
			response.put("message", "Invalid token");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response.toString());
		}
	}

	

}
