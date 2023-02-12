import react from "react"
import React, { useState } from 'react';



export default function Sidebar() {
  const [profileName, setprofilename] = react.useState("Daniel")
  const [profileImage, setprofileImage] = react.useState("assets/img/catanacomics.svg")

  function Profile(props) {
    return (
      <div className="usuario">
        <img data-test='profile-image' onClick={changeImage} src={props.image} alt={props.image} />
        <div className="texto">
          <span>
            <strong data-test='name' >{props.name}</strong>
            <ion-icon onClick={changeName} data-test='edit-name' name="pencil"></ion-icon>
          </span>
        </div>
      </div>

    )
  }

  function changeName() {
    const resposta = prompt("Entre com o nome de usuário: ")

    if (resposta === "" || resposta === undefined || resposta === null) {
      resposta = profileName
    } else {
      setprofilename(resposta)
    }


  }


  function changeImage() {
    const answer = prompt("Entre com a URL de imagem de usuário: ")

    if (answer === "" || answer === undefined || answer === null) {
      answer = profileImage
    } else {
      setprofileImage(answer)
    }


  }

  return (


    <div class="sidebar">
      <Profile name={profileName} image={profileImage} />


      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div style={{ cursor: 'pointer' }}>Ver tudo</div>
        </div>

        <Sugestao image="assets/img/bad.vibes.memes.svg" alt="bad.vibes.memes.svg" nome="bad.vibes.memes" razao="Segue você" follow="Seguir" />
        <Sugestao image="assets/img/chibirdart.svg" alt="chibirdart" nome="chibirdart" razao="Segue você" follow="Seguir" />
        <Sugestao image="assets/img/razoesparaacreditar.svg" alt="razoesparaacreditar" nome="razoesparaacreditar" razao="Novo no Instagram" follow="Seguir" />
        <Sugestao image="assets/img/adorable_animals.svg" alt="adorable_animals" nome="adorable_animals" razao="Segue você" follow="Seguir" />
        <Sugestao image="assets/img/smallcutecats.svg" alt="smallcutecats" nome="smallcutecats" razao="Segue você" follow="Seguir" />
      </div>

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
        Hashtags • Idioma
      </div>

      <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>

  )




}



const Sugestao = (props) => {
  const [follow, setFollow] = useState(props.follow);

  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.image} alt={props.alt} />
        <div className="texto">
          <div className="nome">{props.nome}</div>
          <div className="razao">{props.razao}</div>
        </div>
      </div>
      <div
        class="seguir"
        style={{ color: follow === 'Seguindo' ? 'gray' : '#3396f6', cursor: 'pointer' }}
        onClick={() => {
          if (follow === 'Seguindo') {
            setFollow('Seguir')
          } else {
            setFollow('Seguindo');
          }
        }}
      >
        {follow}
      </div>
    </div>
  );
};





