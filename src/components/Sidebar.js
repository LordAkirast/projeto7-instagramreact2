import react from "react"

export default function Sidebar() {
    const [profileName,setprofilename] = react.useState("Daniel")
    const [profileImage,setprofileImage] = react.useState("assets/img/catanacomics.svg")

    function Profile(props) {
        return (
            <div class="usuario">
            <img onClick={changeImage} src={props.image} alt={props.image}/>
            <div class="texto">
              <span>
                <strong>{props.name}</strong>
                <ion-icon onClick={changeName}   name="pencil"></ion-icon>
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

    return(

        
        <div class="sidebar">
            <Profile name={profileName} image={profileImage}/>
       

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          <Sugestao image="assets/img/bad.vibes.memes.svg" alt="bad.vibes.memes.svg" nome="bad.vibes.memes" razao="Segue você" follow="Seguir"/>
          <Sugestao image="assets/img/chibirdart.svg" alt="chibirdart" nome="chibirdart" razao="Segue você" follow="Seguir"/>
          <Sugestao image="assets/img/razoesparaacreditar.svg" alt="razoesparaacreditar" nome="razoesparaacreditar" razao="Novo no Instagram" follow="Seguir"/>
          <Sugestao image="assets/img/adorable_animals.svg" alt="adorable_animals" nome="adorable_animals" razao="Segue você" follow="Seguir"/>
          <Sugestao image="assets/img/smallcutecats.svg" alt="smallcutecats" nome="smallcutecats" razao="Segue você" follow="Seguir"/>
        </div>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
        
    )

   
    
    
}


function Sugestao(props) {

    return(
    <div class="sugestao">
    <div class="usuario">
      <img src={props.image} alt={props.alt}/>
      <div class="texto">
        <div class="nome">{props.nome}</div>
        <div class="razao">{props.razao}</div>
      </div>
    </div>

    <div class="seguir">{props.follow}</div>
  </div>

)
}


//assets/img/catanacomics.svg
//catanacomics




