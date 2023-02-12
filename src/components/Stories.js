import React, { useState } from 'react';

export default function Stories() {

  const stories = [
    { name: '9gag', alt: '9gag', image: 'assets/img/9gag.svg' },
    { name: 'meowed', alt: 'meowed', image: 'assets/img/meowed.svg' },
    { name: 'barked', alt: 'barked', image: 'assets/img/barked.svg' },
    { name: 'nathanwpylestrangeplanet', alt: 'nathanwpylestrangeplanet', image: 'assets/img/nathanwpylestrangeplanet.svg' },
    { name: 'wawawicomics', alt: 'wawawicomics', image: 'assets/img/wawawicomics.svg' },
    { name: 'respondeai', alt: 'respondeai', image: 'assets/img/respondeai.svg' },
    { name: 'filomoderna', alt: 'filomoderna', image: 'assets/img/filomoderna.svg' },
    { name: 'memeriagourmet', alt: 'memeriagourmet', image: 'assets/img/memeriagourmet.svg' },
  ];


  const postsData = [
    {
      likeCount: "975",
      likeName: "respondeai",
      likeAlt: "respondeai",
      likeImage: "assets/img/respondeai.svg",
      image: "assets/img/meowed.svg",
      alt: "meowed",
      name: "meowed",
      postImage: "assets/img/gato-telefone.svg",
      postAlt: "gato-telefone"
    },
    {
      likeCount: "991",
      likeName: "adorable_animals",
      likeAlt: "adorable_animals",
      likeImage: "assets/img/adorable_animals.svg",
      image: "assets/img/barked.svg",
      alt: "barked",
      name: "barked",
      postImage: "assets/img/dog.svg",
      postAlt: "dog"
    }
  ];



  return (
    <div className="esquerda">
      <div className="stories">


        {stories.map(story => (
          <Story name={story.name} alt={story.alt} image={story.image} />))}


        <div className="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>

      <div className="posts">

        {postsData.map(post => (
          <Posts
            likeCount={post.likeCount}
            likeName={post.likeName}
            likeAlt={post.likeAlt}
            likeImage={post.likeImage}
            image={post.image}
            alt={post.alt}
            name={post.name}
            postImage={post.postImage}
            postAlt={post.postAlt}
          />))}

      </div>
    </div>

  )
}



function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="usuario">
        {props.name}
      </div>
    </div>

  )
}


function Posts(props) {
  const [Like, setLike] = React.useState("heart-outline")
  const [Save, setSave] = React.useState("bookmark-outline")
  const [likeCount, setlikeCount] = React.useState(props.name === 'meowed' ? '993' : '523')


  return (
    <div data-test="post" className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.image} alt={props.alt} />
          {props.name}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img data-test="post-image" onDoubleClick={liked} src={props.postImage} alt={props.postAlt} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon data-test="like-post" onClick={liked} style={{ color: Like === 'heart-outline' ? 'black' : '#e75456' }} name={Like === 'heart-outline' ? 'heart-outline' : 'heart'}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-test="save-post" onClick={saved} name={Save === 'bookmark-outline' ? 'bookmark-outline' : 'bookmark'}></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.likeImage} alt={props.likeAlt} />
          <div className="texto">
            <p data-test="likes-number" >Curtido por <strong>{props.likeName}</strong> e <strong>outras {likeCount} pessoas</strong></p>
          </div>
        </div>
      </div>
    </div>

  )




  function liked() {
    if (Like === 'heart-outline') {
      setLike('heart')
      setlikeCount(props.name === 'meowed' ? '994' : '524')
    } else {
      setLike('heart-outline')
      setlikeCount(props.name === 'meowed' ? '993' : '523')
    }
  }


  function saved() {
    if (Save === 'bookmark-outline') {
      setSave('bookmark')
    } else {
      setSave('bookmark-outline')
    }
  }
}



