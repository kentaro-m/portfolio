import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const Slides = props => {
  const slides = props.slides.map(slide => {
    const createdAt = moment(slide.pubDate).format('YYYY-MM-DD')

    return (
      <article className="col-4 col-12-xsmall work-item" key={slide.guid}>
        <a href={slide.link} className="image fit thumb" target="_blank">
          <img src={slide.thumbnail} alt="" />
        </a>
        <a href={slide.link} className="slide-title" target="_blank">
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
