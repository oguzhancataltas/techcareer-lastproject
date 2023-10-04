import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "20%", height: "auto", marginBottom: "30px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png"
        alt=""
      />
      <h2 className="text-center mb-5">DC COMİCS</h2>
      <p>
        DC Comics, Inc., Amerikalı bir çizgi roman yayıncısıdır. DC
        Entertainment'ın yayıncılık birimidir. DC Entertainment, Time Warner'a
        bağlı Warner Bros.'ın alt kuruluşudur. DC Comics, Amerika çizgi roman
        endüstrisinin en büyük ve en eski şirketlerinden birisidir. Yarattığı ve
        yayımladığı bazı ünlü karakterler arasında Superman, Batman, Wonder
        Woman, Green Lantern, Supergirl, Flash, Aquaman, Cyborg, Shazam, Martian
        Manhunter, Zatanna, Static Shock, Hawkman, Hawkgirl ve Green Arrow
        sayılabilir. Kurgusal DC evreni; Justice League, Justice Society of
        America, Suicide Squad ve Teen Titans gibi takımlara; ayrıca Joker, Lex
        Luthor, Darkseid, Catwoman, Ra's al Ghul, Professor Zoom, Sinestro,
        Black Adam ve Brainiac gibi "kötü"lere ev sahipliği yapar. Şirket ayrıca
        Vertigo markası altında Watchmen ve V for Vendetta gibi DC evreninin
        dışında kalan çizgi romanları da basmıştır. "DC" harfleri, şirketin
        popüler serilerinden biri olan Detective Comics'in baş harflerinden
        gelir. Batman bu serinin içinde doğmuş ve zamanla DC, şirketin adı
        haline gelmiştir. DC Comics ve en büyük rakibi Marvel Comics, 2016
        itibarıyla Amerikan çizgi roman pazarının %70'ini elinde
        bulundurmaktadır.{" "}
        <a
          href="https://tr.wikipedia.org/wiki/DC_Comics"
          rel="noopener noreferrer"
          target="_blank"
        >
          ...daha fazla
        </a>
      </p>
    </div>
  );
};

export default AboutUs;
