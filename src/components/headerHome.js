import React from "react"

export default ({ data }) => {
  function claimWithHtml() {
    return { __html: data.conference_claim }
  }

  return (
    <header id="front-header">
      <div className="cover"></div>
      <div className="content">
        <div class="container text-center">
          <img id="logo" src={data.logo} alt={data.conference_name} />
          <h1 class="display-4" dangerouslySetInnerHTML={claimWithHtml()}></h1>
          <p class="lead">{data.conference_date}</p>

          <p>{data.header_banner.cta_pre_text}{data.header_banner.cta_visible}</p>
          <div class={data.header_banner.cta_visible === true ? "" : "hidden"}>
            <a
              class="btn btn-primary btn-lg"
              href={data.header_banner.cta_url}
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.header_banner.cta_text}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
