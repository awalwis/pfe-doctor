import React from "react";
import { Link } from "react-router-dom";

class NewDoctor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      login: "",
      motDePasse: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

   stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }


  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "/api/v1/doctors/create";
    const { nom,prenom, login, motDePasse } = this.state;

    if (nom.length == 0 || prenom.length == 0 || login.length == 0 || motDePasse.length == 0)
      return;

    const body = {
      nom,
      prenom,
      login,
      motDePasse,
    };


    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.props.history.push(`/doctor/${response.id}`))
      .catch(error => console.log(error.message));
  }


  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Remplissez les champs pour vous inscrire en tant que docteur:
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="NomDocteur">Nom du docteur</label>
                <input
                  type="text"
                  name="nom"
                  id="NomDocteur"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="PrenomDocteur">Prenom du docteur</label>
                <input
                  type="text"
                  name="prenom"
                  id="PrenomDocteur"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="LoginDocteur">Login</label>
                <input
                  type="text"
                  name="login"
                  id="LoginDocteur"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
                
              </div>
              <label htmlFor="motDePasse">Mot de passe </label>
              <input
                  type="text"
                  name="motDePasse"
                  id="MotDePasseDocteur"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
          
              <button type="submit" className="btn custom-button mt-3">
                S'inscrire
              </button>
              <Link to="/" className="btn btn-link mt-3">
                Retour à la page précédente
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewDoctor;
