import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { roadmapData } from '../data/roadmapData';

const RoadmapContext = createContext(null);

const DEFAULT_WEEKLY_GOALS = [
  { id: 'wg-1', text: 'Master 10 Linux CLI commands & write shell script', completed: true },
  { id: 'wg-2', text: 'Solve 5 LeetCode Two-Pointer / Array problems', completed: false },
  { id: 'wg-3', text: 'Push 1 commit to personal portfolio repo on GitHub', completed: true },
  { id: 'wg-4', text: 'Read 1 technical article on system architecture or networking', completed: false }
];

const INITIAL_COMPLETED_MILESTONES = ['y1-ms1', 'y1-ms2'];

export const RoadmapProvider = ({ children }) => {
  // 1. Current Student Year
  const [currentYear, setCurrentYearState] = useState(() => {
    try {
      const saved = localStorage.getItem('hocrow_student_year');
      return saved ? parseInt(saved, 10) : 1;
    } catch {
      return 1;
    }
  });

  // 2. Student Name
  const [studentName, setStudentNameState] = useState(() => {
    try {
      const saved = localStorage.getItem('hocrow_student_name');
      return saved || 'Aspiring Tech Leader';
    } catch {
      return 'Aspiring Tech Leader';
    }
  });

  // 3. Completed Milestones Set
  const [completedMilestones, setCompletedMilestones] = useState(() => {
    try {
      const saved = localStorage.getItem('hocrow_completed_milestones');
      return saved ? JSON.parse(saved) : INITIAL_COMPLETED_MILESTONES;
    } catch {
      return INITIAL_COMPLETED_MILESTONES;
    }
  });

  // 4. Weekly Goals
  const [weeklyGoals, setWeeklyGoals] = useState(() => {
    try {
      const saved = localStorage.getItem('hocrow_weekly_goals');
      return saved ? JSON.parse(saved) : DEFAULT_WEEKLY_GOALS;
    } catch {
      return DEFAULT_WEEKLY_GOALS;
    }
  });

  // 5. Activity Feed
  const [recentActivities, setRecentActivities] = useState(() => {
    try {
      const saved = localStorage.getItem('hocrow_recent_activity');
      return saved ? JSON.parse(saved) : [
        { id: 'act-1', text: 'Enrolled in Year 1: CS Foundations Roadmap', timestamp: 'Today' },
        { id: 'act-2', text: 'Marked milestone "Comfortable using the Linux terminal" as completed', timestamp: 'Yesterday' }
      ];
    } catch {
      return [];
    }
  });

  // Save to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('hocrow_student_year', currentYear.toString());
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, [currentYear]);

  useEffect(() => {
    try {
      localStorage.setItem('hocrow_student_name', studentName);
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, [studentName]);

  useEffect(() => {
    try {
      localStorage.setItem('hocrow_completed_milestones', JSON.stringify(completedMilestones));
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, [completedMilestones]);

  useEffect(() => {
    try {
      localStorage.setItem('hocrow_weekly_goals', JSON.stringify(weeklyGoals));
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, [weeklyGoals]);

  useEffect(() => {
    try {
      localStorage.setItem('hocrow_recent_activity', JSON.stringify(recentActivities));
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, [recentActivities]);

  // Total Milestones across all 4 years
  const allMilestones = roadmapData.flatMap(y => y.milestones);
  const totalMilestonesCount = allMilestones.length;

  // Toggle milestone completion
  const toggleMilestone = (yearId, milestoneId, milestoneTitle) => {
    const isCompleted = completedMilestones.includes(milestoneId);
    let nextList;
    if (isCompleted) {
      nextList = completedMilestones.filter(id => id !== milestoneId);
    } else {
      nextList = [...completedMilestones, milestoneId];
      // Celebrate with confetti!
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#087443', '#065B35', '#10B981', '#E8F5EC', '#F59E0B']
        });
      } catch (err) {
        // Safe fallback
      }

      // Add to recent activities
      const newActivity = {
        id: 'act-' + Date.now(),
        text: `Achieved Milestone: "${milestoneTitle || milestoneId}"`,
        timestamp: 'Just now'
      };
      setRecentActivities(prev => [newActivity, ...prev.slice(0, 7)]);
    }
    setCompletedMilestones(nextList);
  };

  const isMilestoneCompleted = (milestoneId) => {
    return completedMilestones.includes(milestoneId);
  };

  const getYearProgress = (yearNumber) => {
    const yearObj = roadmapData.find(y => y.yearNumber === yearNumber);
    if (!yearObj) return { completedCount: 0, totalCount: 0, percentage: 0 };
    const totalCount = yearObj.milestones.length;
    const completedCount = yearObj.milestones.filter(m => completedMilestones.includes(m.id)).length;
    const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    return { completedCount, totalCount, percentage };
  };

  const getTotalProgress = () => {
    const completedCount = completedMilestones.length;
    const percentage = totalMilestonesCount > 0 ? Math.round((completedCount / totalMilestonesCount) * 100) : 0;
    return {
      completedCount,
      totalCount: totalMilestonesCount,
      percentage
    };
  };

  const setCurrentYear = (year) => {
    setCurrentYearState(year);
  };

  const setStudentName = (name) => {
    setStudentNameState(name);
  };

  const toggleWeeklyGoal = (goalId) => {
    setWeeklyGoals(prev => prev.map(g => g.id === goalId ? { ...g, completed: !g.completed } : g));
  };

  const addWeeklyGoal = (text) => {
    if (!text.trim()) return;
    const newGoal = {
      id: 'wg-' + Date.now(),
      text: text.trim(),
      completed: false
    };
    setWeeklyGoals(prev => [newGoal, ...prev]);
  };

  const resetProgress = () => {
    setCompletedMilestones([]);
    setWeeklyGoals(DEFAULT_WEEKLY_GOALS);
    setRecentActivities([
      { id: 'act-' + Date.now(), text: 'Reset progress to default baseline', timestamp: 'Just now' }
    ]);
  };

  return (
    <RoadmapContext.Provider
      value={{
        currentYear,
        setCurrentYear,
        studentName,
        setStudentName,
        completedMilestones,
        toggleMilestone,
        isMilestoneCompleted,
        getYearProgress,
        getTotalProgress,
        weeklyGoals,
        toggleWeeklyGoal,
        addWeeklyGoal,
        recentActivities,
        resetProgress
      }}
    >
      {children}
    </RoadmapContext.Provider>
  );
};

export const useRoadmap = () => {
  const context = useContext(RoadmapContext);
  if (!context) {
    throw new Error('useRoadmap must be used within a RoadmapProvider');
  }
  return context;
};
