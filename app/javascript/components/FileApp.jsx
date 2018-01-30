import React from 'react';
import FileNames from 'components/FileNames'
import FileSearchForm from 'components/FileSearchForm'

export default class FileApp extends React.Component {

    state = { files: [] };

    componentDidMount = () => {
        this.setState({ files: this.props.files });
    };

    handleSearch = (files) => {
        this.setState({ files: files });
    };

    render = () => {
        return(
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <FileSearchForm handleSearch={this.handleSearch} />
                    </div>
                </div>
                <ul>
                     <FileNames files={this.state.files} />
                </ul>
            </div>
        );
    };
} 