import React, { useEffect, useState } from 'react';
import './Card.scss';
import { MdOutlineShare, MdBookmarkBorder, MdBookmark } from "react-icons/md";
import data from '../../data/infos.json';

const tagColors = data["en"]["Themes"];

function Card(props) {
  const [isSaved, setIsSaved] = useState(false);
  const [showNotification, setShowNotification] = useState(false); // Estado para controlar a notificação

  // Verifica se o card está salvo no localStorage ao carregar o componente
  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem('LocalCards')) || [];
    const cardIsSaved = savedCards.some(savedCard => savedCard.title === props.title);
    setIsSaved(cardIsSaved);
  }, [props.title]);

  // Função para acessar o link do card
  function acessLink(link) {
    window.open(link, "_blank");
  }

  // Função para salvar ou remover o card do localStorage
  function handleBookmark() {
    const savedCards = JSON.parse(localStorage.getItem('LocalCards')) || [];

    if (isSaved) {
      // Se o card já está salvo, removê-lo do localStorage
      const updatedCards = savedCards.filter(savedCard => savedCard.title !== props.title);
      localStorage.setItem('LocalCards', JSON.stringify(updatedCards));
      setIsSaved(false);
    } else {
      // Se o card não está salvo, adicioná-lo ao localStorage
      savedCards.push({
        title: props.title,
        tags: props.tags,
        organization: props.organization,
        author: props.author,
        year: props.year,
        language: props.language,
        link: props.link
      });
      localStorage.setItem('LocalCards', JSON.stringify(savedCards));
      setIsSaved(true);
    }
  }

  // Função para copiar o link e exibir a notificação
  function handleShare() {
    navigator.clipboard.writeText(props.link)
      .then(() => {
        // Exibe a notificação após o link ser copiado
        setShowNotification(true);

        // Remove a notificação após 2 segundos
        setTimeout(() => {
          setShowNotification(false);
        }, 2000);
      })
      .catch(err => {
        console.error('Erro ao copiar o link: ', err);
      });
  }

  return (
    <div className='card-container'>
      <div className="card-title-area">
        <span className='card-title'>{props.title}</span>
      </div>

      <div className='card-tags-area'>
        <span className='area-name'>Tags</span>
        <span className='tags'>
          {props.tags.map((tag) => (
            <span
              key={tag}
              className='tag'
              style={{ backgroundColor: `${tagColors[tag]}` }}
            >
              {tag}
            </span>
          ))}
        </span>
      </div>

      <div className='card-organization-area'>
        <span className='area-name'>Organização</span>
        <span className='organization'>{props.organization}</span>
      </div>

      <div className='card-author-area'>
        <span className='area-name'>Autor(es)</span>
        <div className='author-list'>
          <span className='author'>{props.author.join(', ')}</span>
        </div>
      </div>

      <div className='card-language-area'>
        <span className='area-name'>Linguagem</span>
        <div className='language-row'>
          <span className='language'>{props.language.join(", ")}</span>
        </div>
      </div>

      <button className='btn-acess' onClick={() => acessLink(props.link)}>Acessar</button>

      <div className='card-footer'>
        <span className='footer-btn favorite-btn' onClick={handleBookmark}>
          {isSaved ? (
            <MdBookmark className='icon bookmark-icon' style={{ color: '#4caf50' }} />
          ) : (
            <MdBookmarkBorder className='icon bookmark-icon' />
          )}
        </span>
        <span className='footer-btn share-btn' onClick={handleShare}>
          <MdOutlineShare className='icon' />
        </span>
      </div>

      {/* Notificação de "Link Copiado" */}
      {showNotification && (
        <div className='copy-notification'>
          Link Copiado
        </div>
      )}
    </div>
  );
}

export default Card;
