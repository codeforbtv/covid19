import React from 'react';
import { FirestoreCollection } from 'react-firestore';

export default () => (
    <FirestoreCollection
        path={'health-wellness-accessibility'}
        filter={[ 'topic', '==', 'Domestic Violence']}
        render={({ data }) => {
            return (
                <div>
                    <h1>Health</h1>
                    <ul>
                        {data.map(doc => (
                            <li key={doc.id}>
                                <strong>Name: </strong>{doc.name}
                                <br />
                                <strong>Topic: </strong>{doc.topic}
                                <br />
                                <strong>Number: </strong>{doc.number}
                                <br />
                                <strong>Website: </strong>{doc.website}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }}
    />
)

