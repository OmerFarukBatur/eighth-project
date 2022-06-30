import './App.css';
import { useState, useEffect } from "react";
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl';


const messages = {
  "tr-TR": {
    title: "Selam",
    description: "{ count } yeni mesajınız var"
  },
  "en-US": {
    title: "Hello",
    description: "You have { count } new messages"
  }
}

function App() {

  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale,setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale",locale);
  },[locale])

  return (
    <div className="App">
      <IntlProvider
        locale={locale}
        messages={messages[locale]}        
       >

        <FormattedMessage
          id="title"
        />
        <p> <FormattedMessage
          id="description"
          values={{ count: 1 }}
        /> </p>
        <br/><br/>
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <br/><br/>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
