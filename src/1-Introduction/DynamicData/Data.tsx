


const Data = () => {
  // BUSINESS LOGIC = VARIABILI. COSTANTI FUNZIONI

  const name = "Fabio";
  const surname = "Di Gloria";
  const city = "Andria";

  // VIEW = CIO' CHE L'UTENTE VEDE QUINDI TAG HTML OPPURE BINDING DEI DATI
  return (
    <div>
      <div className="anagrafica"
      
      >
        <header>
          <h1>DATI ANAGRAFICI :</h1>
        </header>

        <h3>{name}</h3>
        <h3>{surname}</h3>
        <h3>{city}</h3>
      </div>
    </div>
  );
};

export default Data;
