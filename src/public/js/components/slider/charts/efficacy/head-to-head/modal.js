import React from "react";
import createMarkup from "../../../../../utils/html-text";

class Modal extends React.Component {

  render () {

    const {title, description, criterias, img, disclaimer} = this.props;

    return (
            <div className="head-to-head-dialog">
                <h3 className="text-orange" dangerouslySetInnerHTML={createMarkup(title)} />

                <div className="head-to-head-dialog-content">


                    <div className="img-container">
                        <img src={img.url} alt=""/>

                        <p className="img-desc">{img.description}</p>
                    </div>


                    <p className="desc">{description}</p>

                    <div className="criteria-list">
                        <p><b>{criterias.inclusion.title}</b></p>
                        <ul>
                            {criterias.inclusion.list.map((item, key) => {
                              return <li key={key}>{item}</li>;
                            })}
                        </ul>

                        <p><b>{criterias.exclusion.title}</b></p>
                        <ul>
                            {criterias.exclusion.list.map((item, key) => {
                              return <li key={key}>{item}</li>;
                            })}
                        </ul>
                    </div>

                </div>

                <ul className="other-list">
                    {criterias.other.map((item, key) => {
                      return <li key={key}>{item}</li>;
                    })}
                </ul>

                <p>{disclaimer}</p>
            </div>
    );

  }

}

export default Modal;