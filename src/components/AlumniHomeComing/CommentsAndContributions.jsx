import { Button } from 'antd';
import React, { Component } from 'react';

import DisqusThread from '../../components/DisqusThread';

class CommentsAndContributions extends Component {
    render() {
        return (
            <div className="max-w-sm mx-auto mt-4 mb-8 px-4">
                <DisqusThread
                    id="main"
                    title="CICT Allumni Homecoming"
                    path="https://cictwvsu.com/alumni/"
                />
                <p className="mb-2"><small>Help us build a better college website!</small></p>
                <Button href="https://github.com/wvsu-cict-code/cict-online" target="_blank" icon="github">Contribute</Button>
            </div>
        );
    }
}

export default CommentsAndContributions;