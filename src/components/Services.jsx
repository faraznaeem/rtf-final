import React, { Component } from "react";
import ServiceCard from "./ServiceCard";
import axios from "axios";

class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        image: "http://placehold.jp/1119x450.png",
        name: "Fallskydd",
        description:
          "Vi på RTF Montage & Transport AB har utbildade montörer inom fallskyddsområdet och kan hjälpa er att se till att ni får en säker arbetsplats. För vissa arbeten finns det större risk för olyckor och då kan ett fallskydd vara av behov för att undvika onödiga olyckor.",
      },
      {
        id: 2,
        image: "http://placehold.jp/1119x450.png",
        name: "Väderskydd",
        description:
          "Ibland kan vädret ställa till det, framför allt under höst och vinter och gör arbetet något mer tidskrävande och svårt än vad det egentligen behöver vara. Vi har ställningar anpassade för alla väder och hjälper er med väderskydd för att underlätta ert arbete. Ett väderskydd du kan känna dig säker med och som gör det som det ska.",
      },
      {
        id: 3,
        image: "http://placehold.jp/1119x450.png",
        name: "Byggnadssställningar",
        description:
          "Låt oss underlätta ditt arbete med en ställning anpassad för ditt projekt. Vi ser till att ditt jobb blir enklare att utföra och att du kan arbeta säkert. Oavsett behovet så kan ni höra av er så hjälper vi er att montera rätt ställning för ert arbete och vi finns självklart tillgängliga under hela projektet om du skulle behöva vår hjälp!",
      },
      {
        id: 4,
        image: "http://placehold.jp/1119x450.png",
        name: "Personaluthyrning",
        description:
          "Vi på RTF Montage & Transport AB hyr ut personal för olika typ av arbete. Har ni behov av personal t.ex ställningsmonörer eller bärare eller kanske personal som snöskotare så är ni välkomna att höra av er till oss. vi finns för och hjälpa er",
      },
    ],
  };

  render() {
    const allServices = this.state.services;
    let servicesList;

    if (allServices.length > 0) {
      servicesList = allServices.map((service) => {
        return (
          <div id={"service-" + service.id} key={service.id}>
            <ServiceCard service={service} />
          </div>
        );
      });
    }
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm">{servicesList}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
