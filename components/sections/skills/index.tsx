import React from 'react';
import Skills from './skills';
import { skills } from '@/mock/mock-data';

const SkillsComponent = () => {
	return <Skills skills={skills} />;
};

export default SkillsComponent;
