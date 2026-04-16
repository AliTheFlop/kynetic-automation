import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Heading, Text, Column } from '@once-ui-system/core';

interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, children, ...props }) => (
          <Heading as="h1" variant="display-strong-s" marginBottom="24" id={props.id}>{children}</Heading>
        ),
        h2: ({ node, children, ...props }) => (
          <Heading as="h2" variant="heading-strong-xl" marginTop="32" marginBottom="16" id={props.id}>{children}</Heading>
        ),
        h3: ({ node, children, ...props }) => (
          <Heading as="h3" variant="heading-strong-l" marginTop="24" marginBottom="16" id={props.id}>{children}</Heading>
        ),
        p: ({ node, children, ...props }) => (
          <Text as="p" variant="body-default-m" onBackground="neutral-medium" marginBottom="16" style={{ lineHeight: '1.6' }}>{children}</Text>
        ),
        a: ({ node, children, href, ...props }) => (
          <a href={href} style={{ color: 'var(--brand-solid-strong)', textDecoration: 'underline' }}>{children}</a>
        ),
        ul: ({ node, children, ...props }) => (
          <Column as="ul" gap="8" marginBottom="24" style={{ paddingLeft: '24px', listStyleType: 'disc' }}>
             {children}
          </Column>
        ),
        ol: ({ node, children, ...props }) => (
          <Column as="ol" gap="8" marginBottom="24" style={{ paddingLeft: '24px', listStyleType: 'decimal' }}>
             {children}
          </Column>
        ),
        li: ({ node, children, ...props }) => (
          <li style={{ color: 'var(--neutral-on-background-medium)' }}>
            <Text variant="body-default-m" onBackground="neutral-medium">
              {children}
            </Text>
          </li>
        ),
        blockquote: ({ node, children, ...props }) => (
          <Column
            style={{
              borderLeft: '4px solid var(--brand-solid-strong)',
              paddingLeft: '16px',
              margin: '24px 0',
              fontStyle: 'italic'
            }}
          >
            {children}
          </Column>
        ),
        hr: ({ node, ...props }) => (
          <hr style={{ border: '0', borderTop: '1px solid var(--neutral-border-medium)', margin: '32px 0' }} />
        )
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
