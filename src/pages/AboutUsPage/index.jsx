import React, { Component } from "react";
import "./index.scss"

class AboutUsPage extends Component {
    render() {
        return (
            <div className="aboutUs-item">
                <div className="aboutUsText-item">
                    <h1 className="aboutUs-h1">
                        About us
                    </h1>
                    <p className="aboutUs-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis sagittis orci quis convallis.
                        Aliquam consequat mauris placerat erat tristique, id placerat erat cursus. Etiam convallis nibh vitae nulla pharetra,
                        in lacinia ante vulputate. Nam pellentesque venenatis augue, eu dignissim nisi blandit at.
                        Cras aliquet eget ante a hendrerit. Donec sapien dolor, fermentum id hendrerit ut, auctor nec tortor.
                        Nam nec auctor massa, eu bibendum ipsum. Vivamus et risus vitae nisi iaculis tempus id ultricies magna.
                        Maecenas urna nunc, efficitur a porttitor in, pulvinar et quam. Morbi ornare sapien sit amet odio sagittis,
                        ac consequat magna mollis.
                        Phasellus lacinia erat quis sagittis dictum. Fusce elementum massa at massa tempor faucibus.
                    </p>
                </div>

            </div>
        )
    }
}

export default AboutUsPage