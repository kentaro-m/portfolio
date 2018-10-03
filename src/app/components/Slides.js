import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const Slides = props => {
  const slides = props.slides.map(slide => {
    const imageUrl = slide.content.content.match(/src="(.+?)"/)
    const createdAt = moment(slide.published).format('YYYY-MM-DD')

    return (
      <article className="col-4 col-12-xsmall work-item" key={slide.id}>
        <a href={slide.link.href} className="image fit thumb" target="_blank">
          <img src={imageUrl[1]} alt="" />
        </a>
        <a href={slide.link.href} className="slide-title" target="_blank">
          <h3>{slide.title}</h3>
        </a>
        <p>{createdAt}</p>
      </article>
    )
  })

  return (
    <section id="slides">
      <h2>Slides</h2>
      <div className="row">
        <div className="row">{slides}</div>
      </div>
      <ul className="actions">
        <li>
          <a
            href={`https://speakerdeck.com/${props.user}`}
            className="button"
            target="_blank"
          >
            Show More Slides
          </a>
        </li>
      </ul>
    </section>
  )
}

Slides.propTypes = {
  slides: PropTypes.array
}

export default Slides
