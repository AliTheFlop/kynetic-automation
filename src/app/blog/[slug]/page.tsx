import { Column, Row, Heading, Text } from '@once-ui-system/core';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPostBySlug, getBlogPosts } from '@/lib/blog';
import { Markdown } from '@/components/Markdown';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Kynetic Automation`,
    description: post.summary,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

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
          <Link href="/blog" style={{ textDecoration: 'none' }}>
            <Row align="center" gap="8">
              <Text style={{ color: 'var(--brand-solid-strong)' }}>←</Text>
              <Text variant="label-strong-m" style={{ color: 'var(--brand-solid-strong)' }}>
                Back to Blog
              </Text>
            </Row>
          </Link>

          <Column gap="16">
            <Text variant="body-default-s" onBackground="neutral-weak">
              {new Date(post.publishedAt).toLocaleDateString('en-AU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </Text>
            <Heading variant="display-strong-xs">
              {post.title}
            </Heading>
          </Column>

          <hr style={{ border: '0', borderTop: '1px solid var(--neutral-border-weak)' }} />

          <Column fillWidth>
            <Markdown content={post.content} />
          </Column>
        </Column>
      </Column>

      <Footer />
    </Column>
  );
}
