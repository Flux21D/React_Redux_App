import React from "react";
import DownloadListItem from "./download-list-item";

class DownloadList extends React.Component {

  constructor (props) {
    super (props);
  }

  render () {

    return (
            <ul className="download-list">
                {this.props.downloadList.map((downloadData, key) => {
                  return <DownloadListItem key={key} downloadData={downloadData} />
                })}
            </ul>
    );

  }

}

export default DownloadList;