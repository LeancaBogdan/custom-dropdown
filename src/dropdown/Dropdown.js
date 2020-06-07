import React, {PureComponent} from "react";
import "./Dropdown.css";

export class Dropdown extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            isVisible: false,
        }
    }

    render() {
        const {selectedItem, isVisible} = this.state;
        const {items, onSelect} = this.props;
        let itemsList = selectedItem ? [selectedItem] : [{id: -1, text: "Nothing selected"}];
        itemsList = [...itemsList, ...items.filter(item => item.id !== selectedItem?.id)];
        return <div className="dropdown-container">
            <div className="dropdown-label"
                 onClick={() => this.setState({isVisible: !isVisible})}
            >
                {selectedItem ? selectedItem.text : "Select"}
            </div>
            {
                isVisible &&
                <div className="dropdown-items-container">
                    {itemsList.map((item, index) => (
                            <div
                                className="item-box"
                                key={item?.id}
                                onClick={() => {
                                    this.setState({selectedItem: item, isVisible: false});
                                    onSelect && onSelect(item.text);
                                }}
                            >
                                <div
                                    className="item-text"
                                    style={index === 0 ? {fontWeight: "700", fontStyle: "italic", color: "#ffffff"} : {}}
                                >
                                    {item?.text ? item.text : "Missing option text"}
                                </div>
                                {index === 0 && <div className="line"/>}
                            </div>
                        )
                    )}
                </div>
            }
        </div>
    }
}
