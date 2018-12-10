import React from 'react'
import { Link, graphql } from 'gatsby'
import { Grid, Row, Col } from 'react-bootstrap'
import '../assets/bootstrap.min.css'
import '../assets/site.css'
const avatar = require('../assets/avatar.jpg')

const Styles = {
  row: {
    width: '100%',
    maxWidth: '75em',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  inlineListItem: {
    display: 'inline-block',
    marginRight: '0.5em',
    marginLeft: '0.5em',
  },
}

class Index extends React.Component {
  render() {
    const { data } = this.props
    const { blogTitle, blogSlogan } = data.site.siteMetadata
    console.log(data)
    const projects = data.allProjectsJson.edges
    return (
      <div>
        <header>
          <div
            id="portfolio-cover"
            className="user-background-color user-background-image"
          />
          <Row style={Styles.row}>
            <Col xs={12}>
              <div id="portfolio-user">
                <div id="portfolio-user-photo">
                  <img
                    alt="Mehedi Hasan Masum's avatar"
                    className="user-photo photo_image image-replacement"
                    src={avatar}
                  />
                </div>

                <div id="portfolio-user-info">
                  <h1 id="portfolio-user-name">
                    Mehedi Hasan Masum <small>(mehamasum)</small>
                  </h1>

                  <p className="large" id="portfolio-user-bio">
                    <i />
                  </p>
                  <div className="expandable expandable-closed expandable-small-only">
                    <div className="expandable-content">
                      <ul className="inline-list" id="portfolio-user-links">
                        <li>
                          <span className="ss-icon ss-location" />
                          Bangladesh
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </header>
        <section
          style={{
            paddingTop: '1em',
            paddingBottom: '1em',
          }}
        >
          <Row style={Styles.row}>
            <Col sm={12}>
              <Row>
                {[...projects].map(({ node: project }) => {
                  return (
                    <Col
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      key={project.id}
                      style={{
                        paddingLeft: '0.75em',
                        paddingRight: '0.75em',
                        margin: 0,
                      }}
                    >
                      <div
                        style={{
                          marginBottom: '1.5em',
                          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                          transition: '0.3s',
                          borderRadius: '5px',
                          '&hover': {
                            boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
                          },
                        }}
                      >
                        <aside
                          style={{
                            position: 'absolute',
                            zIndex: 1,
                            width: '100%',
                          }}
                        >
                          <img
                            alt="Winner"
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                            }}
                            src="https://devpost-challengepost.netdna-ssl.com/assets/shared/software/winner-ribbon-d6a3513950ca29607c8d8682f419dd99.png"
                          />
                        </aside>
                        <img
                          src="https://picsum.photos/400/300/?random"
                          alt="Avatar"
                          style={{
                            width: '100%',
                            borderRadius: '5px 5px 0 0',
                          }}
                        />
                        <div
                          style={{
                            padding: '1em',
                          }}
                        >
                          <h2
                            style={{
                              marginTop: 0,
                            }}
                          >
                            {project.name}
                          </h2>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                          <a href="#">Website</a> &bull; <a href="#">Github</a>
                        </div>
                      </div>
                    </Col>
                  )
                })}
              </Row>
            </Col>
          </Row>
        </section>
        <footer
          style={{
            backgroundColor: '#e6e6e6',
            paddingTop: '3em',
            paddingBottom: '3em',
          }}
        >
          <Row style={Styles.row}>
            <Col
              xs={12}
              md={4}
              style={{
                float: 'left',
                textAlign: 'center',
              }}
            >
              <h2
                style={{
                  margin: 0,
                }}
              >
                &copy; Meha Masum, 2018
              </h2>
            </Col>
            <Col
              xs={12}
              md={4}
              style={{
                float: 'right',
                textAlign: 'center',
              }}
            >
              <ul
                style={{
                  listStyle: 'none',
                  margin: 0,
                }}
              >
                <li style={Styles.inlineListItem}>
                  <a href="#">Github</a>
                </li>
                <li style={Styles.inlineListItem}>
                  <a href="#">Twitter</a>
                </li>
                <li style={Styles.inlineListItem}>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </Col>
          </Row>
        </footer>
      </div>
    )
  }
}

export default Index

export const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        blogTitle
        blogSlogan
      }
    }

    allProjectsJson {
      edges {
        node {
          id
          name
          date
          url
          urlTooltip
          bio
          description
          thumbnail
          tags {
            type
            tag
          }
        }
      }
    }
  }
`
