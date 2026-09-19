// 内容集合定义：所有个人信息的结构都在这里声明
// 用户在 src/content/ 下写的 Markdown 文件会按这里的规则校验
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// 站点基本信息（姓名、一句话介绍、联系方式）
// 注意：留空的字段写 ""（空字符串），网站会自动隐藏对应内容
const site = defineCollection({
  loader: glob({ base: './src/content/site', pattern: '**/*.md' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    location: z.string().optional(),
    email: z.string().email(),
    github: z.string().optional(),
    linkedin: z.string().optional(),
    phone: z.string().optional(),
    wechat: z.string().optional(),
    avatar: z.string().optional(), // 如 "/avatar.jpg"，留空则显示姓名首字圆形标
    contactNote: z.string().optional(),
  }),
});

// 关于我：正文自由书写（Markdown），技能/教育在 frontmatter 里
const about = defineCollection({
  loader: glob({ base: './src/content', pattern: 'about.md' }),
  schema: z.object({
    skills: z.array(z.string()).default([]),
    education: z.array(z.string()).default([]),
  }),
});

// 经历条目：一个文件一条经历
const experience = defineCollection({
  loader: glob({ base: './src/content/experience', pattern: '**/*.md' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.string(),            // 如 "2023.07 - 至今"，原样显示
    current: z.boolean().default(false),
    location: z.string().optional(),
    summary: z.string().optional(),  // 卡片上的一句话概述
    highlights: z.array(z.string()).default([]),  // 收起时显示的要点
    details: z.array(                // 点击展开的分组详情
      z.object({
        title: z.string(),           // 分组小标题，如"数据处理与分析"
        items: z.array(z.string()),  // 分组内的条目
      }),
    ).default([]),
    order: z.number().default(0),  // 数字越大排越前
  }),
});

// 项目条目：一个文件一个项目
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    link: z.string().optional(),
    github: z.string().optional(),
    order: z.number().default(0),  // 数字越大排越前
  }),
});

export const collections = { site, about, experience, projects };
