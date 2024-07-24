package app.backend.response;

import lombok.Getter;

@Getter
public enum ResponseApiMessageEnum {
    INTERNAL_SERVER_ERROR("Ups! ha ocurrido un error inesperado."),
    ERROR_MALFORMED_REQUEST("El formato de la solicitud no coincide con el esperado."),
    ERROR_POLL_REQUIRED_FIELDS("Los campos 'email' y 'musicGenre' son requeridos."),
    ERROR_CONFLICT_EMAIL("El correo ya se encuentra registrado. Porfavor use otro diferente."),
    ERROR_FORMAT_EMAIL("Email %1$s no cumple con el formato aaaaaaa@undominio.algo");

    private final String message;

    private ResponseApiMessageEnum(String message) {
        this.message = message;
    }

}
