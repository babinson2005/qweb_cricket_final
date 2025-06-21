import "./AboutSection.css";

const AboutSection = ({ title, content }) => {
  return (
    //component used for reusability of same format for short about sections of text
    <div className="main">
      <div className="about">
        {/* given title and text as props, loops through texts and formats them as 
                <p> tags, if given a link, then formats the link as well given an url
                and a text*/}
        <h3>{title}</h3>
        {content.map((paragraph, index) => (
          <div key={index}>
            <p>
              {paragraph.text}
              {paragraph.link && (
                <a href={paragraph.link.url}>{paragraph.link.text}</a>
              )}
            </p>
            {paragraph.image && (
              <img
                src={paragraph.image}
                alt={paragraph.alt || ""}
                style={{ maxWidth: "100%", marginTop: "1em" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
