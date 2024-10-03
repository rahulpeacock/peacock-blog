import { defineConfig, defineDocs, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const { docs, meta } = defineDocs({
  docs: {
    dir: './src/content',
    schema: frontmatterSchema.extend({
      date: z.string(),
    }),
  },
});

export default defineConfig();
