import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CheckCircle2, 
  Clock, 
  Award, 
  Calendar, 
  TrendingUp, 
  Plus, 
  RotateCcw, 
  Code2, 
  Terminal, 
  Layers, 
  Briefcase, 
  CheckSquare, 
  Square,
  Sparkles,
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { useRoadmap } from '../context/RoadmapContext';
import { roadmapData } from '../data/roadmapData';
import { skillsData } from '../data/skillsData';

export const StudentDashboard = () => {
  const { 
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
  } = useRoadmap();

  const [newGoalInput, setNewGoalInput] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInputValue, setNameInputValue] = useState(studentName);

  const { percentage, completedCount, totalCount } = getTotalProgress();
  const currentYearObj = roadmapData.find(y => y.yearNumber === currentYear) || roadmapData[0];
  const currentYearProgress = getYearProgress(currentYear);

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (newGoalInput.trim()) {
      addWeeklyGoal(newGoalInput);
      setNewGoalInput('');
    }
  };

  const handleSaveName = (e) => {
    e.preventDefault();
    if (nameInputValue.trim()) {
      setStudentName(nameInputValue.trim());
      setIsEditingName(false);
    }
  };

  // SVG Circular progress computation
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="py-10 sm:py-14 bg-[#F8FAF8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Welcome Header & Controls */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#087443]/15 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 text-left">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-bold rounded-full bg-[#E8F5EC] text-[#065B35] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#087443]" />
                Student Portal
              </span>
              <span className="text-xs text-[#66736B]">Browser Local Storage Synced</span>
            </div>

            {/* Editable Student Greeting */}
            <div className="flex items-center gap-3 pt-1">
              {isEditingName ? (
                <form onSubmit={handleSaveName} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={nameInputValue}
                    onChange={(e) => setNameInputValue(e.target.value)}
                    className="text-2xl sm:text-3xl font-extrabold text-[#17251D] px-2 py-1 border border-[#087443] rounded-xl focus:outline-none"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 text-xs font-bold bg-[#087443] text-white rounded-lg hover:bg-[#065B35]"
                  >
                    Save
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 group">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#17251D] tracking-tight">
                    Welcome back, <span className="text-[#087443]">{studentName}</span>
                  </h1>
                  <button
                    onClick={() => { setNameInputValue(studentName); setIsEditingName(true); }}
                    className="text-xs text-[#66736B] hover:text-[#087443] underline font-medium opacity-80 group-hover:opacity-100"
                    title="Change student name"
                  >
                    (Edit)
                  </button>
                </div>
              )}
            </div>

            <p className="text-sm text-[#66736B]">
              You are currently focused on <span className="font-semibold text-[#17251D]">{currentYearObj.shortTitle}</span>. Keep executing daily to hit your high-package placement goals.
            </p>
          </div>

          {/* Learning Year Selector */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="text-left sm:text-right">
              <label htmlFor="year-select" className="text-xs font-bold text-[#66736B] uppercase block">
                Active Study Year:
              </label>
              <div className="flex gap-1.5 mt-1">
                {[1, 2, 3, 4].map(y => (
                  <button
                    key={y}
                    onClick={() => setCurrentYear(y)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                      currentYear === y
                        ? 'bg-[#087443] text-white shadow-xs'
                        : 'bg-[#F8FAF8] text-[#17251D] hover:bg-[#E8F5EC] border border-gray-200'
                    }`}
                  >
                    Year {y}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                if (window.confirm('Reset all milestone and weekly goal progress back to initial baseline?')) {
                  resetProgress();
                }
              }}
              className="p-2.5 text-gray-400 hover:text-red-500 rounded-xl hover:bg-red-50 transition-colors"
              title="Reset progress to default"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Metrics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Circular Progress Widget */}
          <div className="bg-white p-5 rounded-3xl border border-[#087443]/15 shadow-sm flex items-center gap-4 text-left">
            <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  className="stroke-[#E8F5EC]"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  className="stroke-[#087443] transition-all duration-700 ease-out"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute text-center">
                <span className="text-base font-extrabold text-[#087443]">{percentage}%</span>
              </div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#66736B]">Roadmap Overall</div>
              <div className="text-base font-bold text-[#17251D]">{completedCount} of {totalCount} Done</div>
              <div className="text-[11px] text-[#087443] font-semibold mt-0.5">4-Year Curriculum</div>
            </div>
          </div>

          {/* Current Year Progress */}
          <div className="bg-white p-5 rounded-3xl border border-[#087443]/15 shadow-sm flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#E8F5EC] text-[#087443] flex items-center justify-center shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#66736B]">Year {currentYear} Milestones</div>
              <div className="text-xl font-extrabold text-[#17251D]">{currentYearProgress.percentage}%</div>
              <div className="text-[11px] text-[#66736B]">
                {currentYearProgress.completedCount} / {currentYearProgress.totalCount} Achieved
              </div>
            </div>
          </div>

          {/* Active Weekly Goals */}
          <div className="bg-white p-5 rounded-3xl border border-[#087443]/15 shadow-sm flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#E8F5EC] text-[#087443] flex items-center justify-center shrink-0">
              <CheckSquare className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#66736B]">Weekly Targets</div>
              <div className="text-xl font-extrabold text-[#17251D]">
                {weeklyGoals.filter(g => g.completed).length} / {weeklyGoals.length}
              </div>
              <div className="text-[11px] text-[#087443] font-semibold">Active Sprint</div>
            </div>
          </div>

          {/* Career Readiness Index */}
          <div className="bg-white p-5 rounded-3xl border border-[#087443]/15 shadow-sm flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#E8F5EC] text-[#087443] flex items-center justify-center shrink-0">
              <TrendingUp className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#66736B]">Trajectory</div>
              <div className="text-base font-extrabold text-[#087443]">Tier-1 IT Path</div>
              <div className="text-[11px] text-[#66736B]">Target: Placements 2027-28</div>
            </div>
          </div>

        </div>

        {/* 2 Column Main Section: Goals & Pending Tasks vs Skills & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (7 Cols): Weekly Learning Goals & Current Year Milestones */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Weekly Learning Goals Checklist */}
            <div className="bg-white rounded-3xl p-6 border border-[#087443]/15 shadow-sm text-left">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#17251D] flex items-center gap-2">
                    <CheckSquare className="w-5 h-5 text-[#087443]" />
                    Weekly Learning Goals
                  </h3>
                  <p className="text-xs text-[#66736B]">Check off tasks as you finish them this week</p>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#E8F5EC] text-[#065B35]">
                  Sprint Active
                </span>
              </div>

              {/* Add New Goal Input */}
              <form onSubmit={handleAddGoal} className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Add a new custom target (e.g. solve 3 graph problems)..."
                  value={newGoalInput}
                  onChange={(e) => setNewGoalInput(e.target.value)}
                  className="flex-1 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#087443] bg-[#F8FAF8]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-[#087443] hover:bg-[#065B35] rounded-xl flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add</span>
                </button>
              </form>

              {/* Goals list */}
              <div className="space-y-2.5">
                {weeklyGoals.map(goal => (
                  <div
                    key={goal.id}
                    onClick={() => toggleWeeklyGoal(goal.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                      goal.completed
                        ? 'bg-[#E8F5EC]/50 border-[#087443]/20 text-[#065B35]'
                        : 'bg-white border-gray-200 hover:border-[#087443]/30 text-[#17251D]'
                    }`}
                  >
                    {goal.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-[#087443] shrink-0 fill-[#E8F5EC]" />
                    ) : (
                      <Square className="w-5 h-5 text-gray-300 shrink-0" />
                    )}
                    <span className={`text-sm font-medium ${goal.completed ? 'line-through text-gray-400' : ''}`}>
                      {goal.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Year Milestone Verification */}
            <div className="bg-white rounded-3xl p-6 border border-[#087443]/15 shadow-sm text-left">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#17251D] flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#087443]" />
                    Year {currentYear} Milestones ({currentYearObj.badge})
                  </h3>
                  <p className="text-xs text-[#66736B]">Directly verify achievements from your active academic year</p>
                </div>
                <Link 
                  to="/roadmap"
                  className="text-xs font-bold text-[#087443] hover:underline flex items-center gap-1"
                >
                  <span>Full Roadmap</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-3">
                {currentYearObj.milestones.map((ms, idx) => {
                  const completed = isMilestoneCompleted(ms.id);
                  return (
                    <div
                      key={ms.id}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                        completed
                          ? 'bg-[#E8F5EC]/60 border-[#087443]/30'
                          : 'bg-[#F8FAF8] border-gray-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-white border border-gray-200 text-xs font-bold text-[#66736B] flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className={`text-sm font-semibold ${completed ? 'text-[#065B35] line-through' : 'text-[#17251D]'}`}>
                          {ms.title}
                        </span>
                      </div>

                      <button
                        onClick={() => toggleMilestone(currentYear, ms.id, ms.title)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                          completed
                            ? 'bg-[#087443] text-white'
                            : 'bg-white text-[#17251D] hover:bg-[#E8F5EC] border border-gray-300'
                        }`}
                      >
                        {completed ? '✓ Done' : 'Complete'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column (5 Cols): Skills Progress & Recent Activity */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Skills Progress Overview */}
            <div className="bg-white rounded-3xl p-6 border border-[#087443]/15 shadow-sm text-left">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                <h3 className="text-lg font-bold text-[#17251D] flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#087443]" />
                  Skills Progress
                </h3>
                <Link to="/skills" className="text-xs font-bold text-[#087443] hover:underline">
                  View All (8)
                </Link>
              </div>

              <div className="space-y-4">
                {skillsData.slice(0, 5).map((skill, idx) => {
                  // Synthetic progress based on overall milestones
                  const skillProgress = Math.min(100, Math.max(15, percentage + (idx % 2 === 0 ? 10 : -10)));
                  return (
                    <div key={skill.id} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#17251D] truncate max-w-[200px]">{skill.title}</span>
                        <span className="font-semibold text-[#087443]">{skillProgress}%</span>
                      </div>
                      <div className="w-full bg-[#E8F5EC] rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-[#087443] h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skillProgress}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent Activity Log */}
            <div className="bg-white rounded-3xl p-6 border border-[#087443]/15 shadow-sm text-left">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                <h3 className="text-lg font-bold text-[#17251D] flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#087443]" />
                  Recent Activity
                </h3>
                <span className="text-xs text-[#66736B]">Live Event Log</span>
              </div>

              {recentActivities.length === 0 ? (
                <p className="text-xs text-gray-400 py-3">No activity recorded yet. Complete a milestone!</p>
              ) : (
                <div className="space-y-3">
                  {recentActivities.map(act => (
                    <div key={act.id} className="flex items-start gap-2.5 text-xs">
                      <div className="w-2 h-2 rounded-full bg-[#087443] mt-1 shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium text-[#17251D] leading-tight">{act.text}</p>
                        <span className="text-[10px] text-[#66736B]">{act.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Next Recommended Targets */}
            <div className="p-5 rounded-3xl bg-gradient-to-br from-[#065B35] to-[#087443] text-white text-left space-y-3 shadow-brand">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-green-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-green-200">Upcoming Target</span>
              </div>
              <h4 className="text-base font-bold leading-snug">
                {currentYear === 1 && "Complete 50+ Linux terminal commands practice and host personal portfolio on GitHub."}
                {currentYear === 2 && "Solve 50+ LeetCode medium questions and build a database-connected Student Management System."}
                {currentYear === 3 && "Deploy an end-to-end Full-Stack MERN or Next.js application with live user authentication."}
                {currentYear === 4 && "Conduct 5 System Design mock interviews and finalize your ATS-ready resume."}
              </h4>
              <Link
                to="/roadmap"
                className="inline-flex items-center gap-1.5 text-xs font-bold bg-white text-[#065B35] px-3.5 py-2 rounded-xl hover:bg-[#E8F5EC] transition-all shadow-xs"
              >
                <span>Go to Year {currentYear} Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
