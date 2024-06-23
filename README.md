# StyleScape: Stylized and Depth-Consistent 3D Scene Generation

This is our 3D scene generation research project for Stanford's CS 231N (Spring 2024). See our final generated videos at our [project page](tinyurl.com/cs231n-stylescape).

## Abstract 
In this paper, we propose a method for 3D-consistent scene generation to create diverse, visually appealing, and infinite walkthroughs of specific films. Our approach builds on the SceneScape pipeline and uses Dreambooth to train Stable Diffusion models for few-shot, scene-driven generation of novel views with specific characters, settings, and styles. We use ControlNet to condition these models for inpainting tasks, ensuring structurally and contextually coherent scenes as the model inpaints the masks recursively generated from the depth estimation model and the constructed 3D mesh. We conducted experiments on four stylistically distinct films, and our method outperforms the baseline on both quantitative aesthetic metrics and qualitative human evaluations, based on content and style resemblance with the target film.

![CS231n Poster](https://github.com/49emily/cs231n-final-project/assets/44551281/5f28b45c-48c2-4563-a315-3d6434a3c3cb)
