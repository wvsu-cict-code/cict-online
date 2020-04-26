// Converted to typescript. Original: https://github.com/lamyfarai/react-typing-effect
import cx from 'classnames';
import React, { Component } from 'react';
import Cursor from './Cursor';

interface Props {
    speed: number,
    typingDelay: number,
    eraseDelay: number,
    staticText: string,
    text?: any,
    className: string,
    cursor: string,
    cursorClassName: string
}

export default class TypingEffect extends Component<
    Props, {
        index: number,
        displayText: string
    }> {
    _timeout: any;

    constructor(props: Props) {
        super(props);
        this.state = {
            index: 0,
            displayText: ""
        };
        this.getRawText = this.getRawText.bind(this);
        this.type = this.type.bind(this);
        this.erase = this.erase.bind(this);
        this.startTyping = this.startTyping.bind(this);
    }

    componentDidMount() {
        this.startTyping();
    }

    componentWillUnmount() {
        this._timeout && clearTimeout(this._timeout);
    }

    startTyping() {
        if (typeof window !== "undefined") {
            this._timeout = setTimeout(() => {
                this.type();
            }, this.props.typingDelay);
        }
    }

    getRawText() {
        const { text } = this.props;
        return typeof text === "string" ? [text] : [...text];
    }

    type() {
        let { index, displayText } = this.state;
        let text = this.getRawText()[index];
        if (text.length > displayText.length) {
            displayText = text.substr(0, displayText.length + 1);
            this.setState({ displayText }, () => {
                if (typeof window !== "undefined") {
                    this._timeout = setTimeout(() => {
                        this.type();
                    }, this.props.speed);
                }
            });
        } else {
            if (typeof window !== "undefined") {
                this._timeout = setTimeout(() => {
                    this.erase();
                }, this.props.eraseDelay);
            }
        }
    }

    erase() {
        let { index, displayText } = this.state;
        if (displayText.length === 0) {
            const textArray = this.getRawText();
            index = (index + 1) === textArray.length ? 0 : index + 1;
            this.setState({ index }, () => {
                this.startTyping();
            });
        } else {
            displayText = displayText.substr(-displayText.length, (displayText.length - 1));
            this.setState({ displayText }, () => {
                if (typeof window !== "undefined") {
                    this._timeout = setTimeout(() => {
                        this.erase();
                    }, this.props.speed);
                }
            });
        }
    }

    render() {
        const {
            speed,
            typingDelay,
            eraseDelay,
            staticText,
            text,
            className,
            cursor,
            cursorClassName,
            ...otherProps
        } = this.props;
        const { displayText } = this.state;
        const classes = cx(className, 'lfm__typing_effect');
        return (
            <span {...otherProps} className={classes}>
                {staticText ?
                    <span className="lfm__typing_effect_static_text">
                        {staticText}&nbsp;
            </span> : null}

                <span className="lfm__typing_effect_text">{displayText}</span>

                <Cursor
                    cursor={cursor}
                    cursorClassName={cursorClassName}
                />
            </span>
        );
    }
}