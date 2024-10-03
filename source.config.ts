import { frontmatterSchema, defineDocs, defineConfig } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const { docs, meta } = defineDocs({
  docs: {
    schema: frontmatterSchema.extend({
      date: z.string(),
    }),
  }
});

export default defineConfig();
