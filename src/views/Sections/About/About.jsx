import React from "react";
import PropTypes from "prop-types";
import Image from "components/Image"
import { Row, Col } from "react-bootstrap";
import TimelineItem from "components/TimelineItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import nl2br from "utils/nl2br";

import "./About.scss";

const About = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, timeline } = frontmatter;

  return (
    <>
      <Image className="image-fluid section-image" fileName="about-us.png" />
      <div className="page-section">
        <p className="para">
          ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
          ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
        </p>
      </div>
      <Image className="image-fluid section-image" fileName="roadmap.png" />
      <PageSection className={className} id={anchor}>
        <Row>
          <SectionHeader header={rootHeader} subheader={rootSubHeader} />
        </Row>
        <Row>
          <Col lg={12}>
            <ul className="timeline">
              {timeline.map(({ content, header, imageContent, imageFileName }, ind) => (
                <TimelineItem
                  invert={ind % 2 === 1}
                  key={header}
                  imageFileName={imageFileName}
                  header={header}
                  content={content}
                  imageContent={
                    imageContent ? (
                      <div dangerouslySetInnerHTML={{ __html: `<h4>${nl2br(imageContent)}</h4>` }} />
                    ) : null
                  }
                />
              ))}
            </ul>
          </Col>
        </Row>
      </PageSection>
      <PageSection id="tokens">
        <Image className="image-fluid section-image" fileName="tokenomics.png" />
        <div className="page-section">
          <p>
            <ul>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h</li>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h</li>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h</li>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h</li>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h</li>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h</li>
            </ul>
          </p>
        </div>
      </PageSection>

    </>
  );
};

About.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

About.defaultProps = {
  className: null,
  frontmatter: null,
};

export default About;
