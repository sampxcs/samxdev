'use client'

import styles from './precode.module.css'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import Copy from '@/components/Icons/Copy'
import Check from '@/components/Icons/Check'

export default function PreCode ({ children }: any) {
  const [tooltip, setTooltip] = useState('Copiar')
  const { props } = children
  const lenguage = props.className?.replace('lang-', '')

  const handleCopy = () => {
    setTooltip('Copiado')
    setTimeout(() => {
      setTooltip('Copiar')
    }, 2000)
  }

  return (
    <div className={styles.precode}>
      <SyntaxHighlighter language={lenguage} style={oneDark}>
        {props.children}
      </SyntaxHighlighter>
      <div className={styles.after}>
        <CopyToClipboard text={props.children}>
          <button data-tooltip={tooltip} onClick={handleCopy}>
            {tooltip === 'Copiar' ? <Copy width='1rem' /> : <Check width='0.75rem' />}
          </button>
        </CopyToClipboard>
      </div>
      {lenguage && <span className={styles.lenguage}>{lenguage}</span>}
    </div>
  )
}
