import React from "react";
import {Link} from "react-router";

class DownloadListItem extends React.Component {

  constructor (props) {
    super (props);
  }

  render () {

    const {downloadData} = this.props;

    return (
            <li className="download-list-item">

                <div className="thumbnail-container">
                    <img src={downloadData.thumbnail.fields.file.url} alt={downloadData.thumbnail.fields.title}/>
                </div>
                
                <h4 className="title text-center">{downloadData.title}</h4>

                <p className="description text-center">{downloadData.description}</p>

                {downloadData.file ? <p className="text-center">Filetype: <span className="text-uppercase">{downloadData.file.fields.file.contentType.match(/[^\/]+$/g)}</span></p> : null}

                <div className="btn-download-container">
                    {downloadData.file ? <Link to={downloadData.file.fields.file.url} className="btn btn-orange" target="_blank">Download</Link> : null}
                </div>

            </li>
    );

  }

}

export default DownloadListItem;