import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const Slides = props => {
  const slides = props.slides.map(slide => {
    const imageUrl = slide.content.content.match(/src="(.+?)"/)
    const createdAt = moment(slide.published).format('YYYY-MM-DD')

    return (
      <article className="col-4 col-12-xsmall work-item" key={slide.id}>
        <a href={slide.link.href} className="image fit thumb">
          <img src={imageUrl[1]} alt="" />
        </a>
        <a href={slide.link.href}>
          <h3>{slide.title}</h3>
        </a>
        <p>{createdAt}</p>
      </article>
    )
  })

  return <div className="row">{slides}</div>
}

Slides.propTypes = {
  slides: PropTypes.array
}

export default Slides
