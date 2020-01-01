import React from "react";

export default function Nav() {

  return (
    <div className="App">
      <p>LOGIN</p>
      <div>
        <form action="/action_page.php">
          <label>Invoice Number</label>
          <input
            type="text"
            id="inNum"
            name="InvoiceNum"
            placeholder="Your Invoice Number..."
          />
          <label>Accout Number</label>
          <input
            type="text"
            id="accNum"
            name="accountNum"
            placeholder="Your Account Number..."
          />

          <label>Name with Initials</label>
          <input
            type="text"
            id="initName"
            name="initialName"
            placeholder="Your Name with Initials..."
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
