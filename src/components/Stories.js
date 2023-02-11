export default function Stories() {
    return(
        <div className="esquerda">
        <div className="stories">



          <Story name="9gag" alt="9gag" image='assets/img/9gag.svg'/>
          <Story name="meowed" alt="meowed" image="assets/img/meowed.svg"/>
          <Story name="barked" alt="barked" image="assets/img/barked.svg"/>
          <Story name="nathanwpylestrangeplanet" alt="nathanwpylestrangeplanet" image="assets/img/nathanwpylestrangeplanet.svg"/>
          <Story name="wawawicomics" alt="wawawicomics" image="assets/img/wawawicomics.svg"/>
          <Story name="respondeai" alt="respondeai" image="assets/img/respondeai.svg"/>
          <Story name="filomoderna" alt="filomoderna" image="assets/img/filomoderna.svg"/>
          <Story name="memeriagourmet" alt="memeriagourmet" image="assets/img/memeriagourmet.svg"/>

          <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

        <div className="posts">
          <div className="post">
            <div className="topo">
              <div className="usuario">
                <img src="assets/img/meowed.svg" alt="meowed"/>
                meowed
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="conteudo">
              <img src="assets/img/gato-telefone.svg" alt="gato-telefone"/>
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src="assets/img/respondeai.svg" alt="respondeai"/>
                <div className="texto">
                  Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="post">
            <div className="topo">
              <div className="usuario">
                <img src="assets/img/barked.svg" alt="barked"/>
                barked
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="conteudo">
              <img src="assets/img/dog.svg" alt="dog" />
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src="assets/img/adorable_animals.svg" alt="adorable_animals"/>
                <div className="texto">
                  Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    )
}


///"assets/img/9gag.svg"
function Story(props) {
  return(
    <div className="story">
    <div className="imagem">
      <img src={props.image} alt={props.alt}/>
    </div>
    <div className="usuario">
      {props.name}
    </div>
  </div>

  )
}


