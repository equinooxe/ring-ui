import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import highlight from 'highlight.js';
import classNames from 'classnames';

import 'highlight.js/styles/github.css';

import normalizeIndent from '../global/normalize-indent';
import trivialTemplateTag from '../global/trivial-template-tag';

import styles from './code.css';

/**
 * @name Code
 * @category Components
 * @framework React
 * @constructor
 * @description Shows a block of code. Highlights [172 languages](https://highlightjs.org/static/demo/). Optionally beautifies JS(X), CSS and HTML.
 * @example-file ./code.examples.html
 */

export default class Code extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    code: PropTypes.string.isRequired,
    inline: PropTypes.bool,
    language: PropTypes.string
  };

  static defaultProps = {
    inline: false
  };

  componentDidMount() {
    this.highlight();
  }

  componentDidUpdate() {
    this.highlight();
  }

  highlight() {
    if (!this.props.inline) {
      highlight.highlightBlock(this.code);
    }
  }

  codeRef = el => {
    this.code = el;
  };

  render() {
    const {code, className, inline, language} = this.props;

    const Tag = inline ? 'span' : 'pre';
    const classes = classNames(styles.code, className, language, {
      [styles.inline]: inline
    });

    return (
      <Tag className={classes}>
        <code ref={this.codeRef}>{normalizeIndent(code)}</code>
      </Tag>
    );
  }
}

const code = trivialTemplateTag(source => <Code code={source}/>);

export {code};
