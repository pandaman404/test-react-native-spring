package app.backend.model;

import lombok.Getter;

@Getter
public enum MusicGenre {
    ROCK("ROCK"),
    POP("POP"),
    JAZZ("JAZZ"),
    CLASSICAL("CLASSICAL"),
    HIP_HOP("HIP HOP"),
    REGGAE("REGGAE"),
    BLUES("BLUES"),
    ELECTRONIC("ELECTRONIC"),
    COUNTRY("COUNTRY"),
    FOLK("FOLK"),
    METAL("METAL"),
    PUNK("PUNK");

    private final String displayName;

    MusicGenre(String displayName) {
        this.displayName = displayName;
    }

}
