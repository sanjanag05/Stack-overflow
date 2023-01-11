import React from 'react'

const WidgetTag = () => {

  const tags=['c', 'css', 'expess', 'firebase', 'html','react', 'java', 'angular', 'javascript', 'angularjs', 'mongodb' ]
  return (
    <div className="widget-tags">
      <h4>Watched Tags</h4>
      <div className="widget-tags-div">
        {
          tags.map((tag) =>(
            <p key ={tag}>{tag}</p>

          ))
        }

      </div>

    </div>
  )
}

export default WidgetTag