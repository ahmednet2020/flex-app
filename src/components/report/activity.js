import React from 'react';
export default function Activity({activity ,addActivity}) {
        return (
            <div className="box activity">
                <h4>activity</h4>
                <hr/>
                <div className="container">
                {activity.slice(0,3).map((e,i) => 
                            <div  key={`activity${i}`}>
                                <table onClick ={() => {addActivity()}}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="imguse"><img src={`/img/${e.img}.jpg`} alt="imgsor" /></div>
                                            </td>
                                            <td><span><b>{e.name}</b>&nbsp;</span>{e.title}<br/>
                                                <a href="/">
                                                <i className="fa fa-clock-o" aria-hidden="true">&nbsp;{e.time}</i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="hr"></div>
                            </div>
                        )}
                </div>
            </div>
    );
};