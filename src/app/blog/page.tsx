import { Column, Row, Heading, Text, Grid } from '@once-ui-system/core';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getBlogPosts } from '@/lib/blog';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Kynetic Automation',
  description: 'Insights and articles on AI automation for local businesses.',
};

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <Column fillWidth fillHeight>
      <Navbar />
      
      <Column 
        as="main" 
        fillWidth 
        paddingX="l" 
        paddingY="128" 
        horizontal="center"
        style={{ flex: 1 }}
      >
        <Column maxWidth="m" fillWidth gap="48">
          <Column gap="16">
            <Heading variant="display-strong-s">Blog</Heading>
            <Text variant="body-default-l" onBackground="neutral-medium">
              Insights, guides, and updates on AI automation for forward-thinking businesses.
            </Text>
          </Column>
          
          <Grid 
            fillWidth 
            columns="2" 
            m={{ columns: "1" }}
            gap="24"
          >
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <Column 
                  background="surface" 
                  border="neutral-medium" 
                  radius="l" 
                  padding="32" 
                  gap="16"
                  style={{
                    height: '100%',
                    transition: 'transform 0.2s ease, border-color 0.2s ease',
                  }}
                >
                  <Column gap="8">
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {new Date(post.publishedAt).toLocaleDateString('en-AU', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </Text>
                    <Heading as="h3" variant="heading-strong-m">
                      {post.title}
                    </Heading>
                  </Column>
                  <Text variant="body-default-m" onBackground="neutral-medium" style={{ flex: 1 }}>
                    {post.summary}
                  </Text>
                  <Row fillWidth align="center" gap="8">
                    <Text variant="label-strong-m" style={{ color: 'var(--brand-solid-strong)' }}>
                      Read article
                    </Text>
                    <Text style={{ color: 'var(--brand-solid-strong)' }}>→</Text>
                  </Row>
                </Column>
              </Link>
            ))}
            
            {posts.length === 0 && (
              <Text variant="body-default-m" onBackground="neutral-weak">
                No posts found.
              </Text>
            )}
          </Grid>
        </Column>
      </Column>

      <Footer />
    </Column>
  );
}
