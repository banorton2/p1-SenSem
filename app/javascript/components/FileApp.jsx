import React from 'react';
import FileNames from 'components/FileNames'

export default class FileApp extends React.Component {

    state = { files: [] };

    componentDidMount = () => {
        this.setState({ files: this.props.files });
    };

    render = () => {
        return(
            <div>
                <ul>
                    <FileNames files={this.state.files} />
                </ul>
            </div>
        );
    };
}   
FileNames.jsx

import React from 'react';
import FileName from 'components/FileName'

export default class FileNames extends React.Component {
    render = () => {
        var files = [];
        this.props.files.forEach(
            function(f,index){
                files.push(<FileName  file={f}
                                    key ={'file_'+index} />);
            }
        );

        return(
            <ul>
                {files}
            </ul>
        );
    };
}