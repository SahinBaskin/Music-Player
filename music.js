class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }
    getName() {
        return this.title + " - " + this.singer;
    }
}

const musicList = [
    new Music("Islak Islak", "Cem Karaca", "CemKaraca.jpg", "Cem_Karaca_Islak_Islak.mp3"),
    new Music("Sana El Pençe Durmam", "Emre Fel", "EmreFel.jpg", "Emre_Fel_Sana_El_Pençe_Durmam.mp3"),
    new Music("Cheri Cheri Lady", "Modern Talking", "cheri.jpg", "Modern_Talking_Cheri_Cheri_Lady.mp3"),
    new Music("Baytar", "Sagopa Kajmer", "Sago.jpg", "Sagopa_Kajmer_Baytar.mp3"),
]