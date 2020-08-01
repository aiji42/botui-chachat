import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Close from './Close';
import Open from './Open';
import TagManager from 'react-gtm-module';
import { css } from '@emotion/core';
import { useWindowWidth } from '@react-hook/window-size';

const style = {
  overlay: {
    position: 'fixed',
    top: null,
    left: null,
    right: 450,
    bottom: 620,
    zIndex: 100,
    backgroundColor: 'transparent'
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 450,
    height: 620,
    border: 'none',
    backgroundColor: 'transparent',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '6px 6px 0 0',
    outline: 'none',
    padding: '0',
    boxShadow: '0px 0px 7px 0px #b8bcad'
  }
};

const closeButton = css`
  position: absolute;
  right: 16px;
  top: 10px;
  cursor: pointer;
`;

const openButton = css`
  position: fixed;
  bottom: 20px;
  right: 10px;
  z-index: 100;
  background: white;
  border: 4px solid #62cfc1;
  border-radius: 50px;
  padding: 20px 15px;
  box-shadow: 0px 0px 7px 0px #b8bcad;
  cursor: pointer;
`;

const Modal = ({ isOpen: initialOpen, appElement, children }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const windowWidth = useWindowWidth();
  const isWide = useMemo(() => windowWidth >= 1000, [windowWidth]);

  useEffect(() => {
    const img = document.querySelector('.fv img');
    const lisnner = (e) => {
      const x = e.offsetX / e.target.width;
      const y = e.offsetY / e.target.height;
      if (0.165 < y && y < 0.815 && 0.461 < x && x < 0.925) setIsOpen(true);
    };
    img.addEventListener('click', lisnner);

    return () => img.removeEventListener('click', lisnner);
  }, []);

  useEffect(() => {
    return () => {
      const eventLabel = isOpen ? 'close' : 'reOpen';
      TagManager.dataLayer({
        dataLayer: { event: 'analytics', eventCategory: 'botui-parent', eventAction: 'display', eventLabel },
        dataLayerName: 'dataLayerBotuiParent'
      });
    };
  }, [isOpen]);

  return isWide && (
    <>
      <ReactModal appElement={appElement} isOpen={isOpen} style={style}>
        <div css={closeButton}><Close onClick={() => { setIsOpen(false); }} /></div>
        {children}
      </ReactModal>
      <div css={openButton} onClick={() => { setIsOpen(true); }}><Open /></div>
    </>
  );
};

Modal.defaultProps = {
  isOpen: true
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  appElement: PropTypes.object,
  children: PropTypes.node
};

export default Modal;