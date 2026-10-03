import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  ListTodo, 
  FolderGit2, 
  Award, 
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useRoadmap } from '../context/RoadmapContext';

export const RoadmapYearCard = ({ yearData, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [activeTab, setActiveTab] = useState('modules'); // 'modules' | 'tasks' | 'projects' | 'milestones'
  const { toggleMilestone, isMilestoneCompleted, getYearProgress } = useRoadmap();
  
  const { completedCount, totalCount, percentage } = getYearProgress(yearData.yearNumber);

  return (
    <div 
      id={`year-${yearData.yearNumber}`}
      className="bg-white rounded-3xl border border-[#087443]/15 shadow-sm hover:shadow-brand transition-all duration-300 overflow-hidden mb-8"
    >
      {/* Top Banner / Header of the Year Card */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-white via-[#E8F5EC]/40 to-white border-b border-[#087443]/10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Year Title & Theme */}
          <div className="space-y-2 text-left">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-[#087443] text-white">
                Year {yearData.yearNumber}
              </span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#E8F5EC] text-[#065B35] border border-[#087443]/20">
                {yearData.badge}
              </span>
              <span className="text-xs text-[#66736B] flex items-center gap-1 font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#087443]" />
                {yearData.semesterFocus}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17251D] tracking-tight">
              {yearData.title}
            </h2>

            <p className="text-sm font-semibold text-[#087443]">
              Theme: <span className="text-[#17251D] font-normal">{yearData.theme}</span>
            </p>

            <p className="text-sm text-[#66736B] max-w-3xl leading-relaxed">
              {yearData.objective}
            </p>
          </div>

          {/* Progress Widget for this specific year */}
          <div className="shrink-0 bg-white p-4 rounded-2xl border border-[#087443]/15 shadow-xs min-w-[200px] text-center lg:text-right">
            <div className="flex items-center justify-between lg:justify-end gap-3 mb-1.5">
              <span className="text-xs font-semibold text-[#66736B]">Year Progress:</span>
              <span className="text-sm font-bold text-[#087443]">{percentage}%</span>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-[#E8F5EC] rounded-full h-2.5 overflow-hidden">
              <div 
                className="bg-[#087443] h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
            
            <div className="text-[11px] text-[#66736B] mt-1.5 font-medium">
              {completedCount} of {totalCount} Milestones Achieved
            </div>
          </div>

        </div>

        {/* Category Navigation Pills inside Year Card */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-[#087443]/10">
          <button
            onClick={() => { setActiveTab('modules'); setIsExpanded(true); }}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'modules' && isExpanded
                ? 'bg-[#087443] text-white shadow-xs'
                : 'bg-white text-[#17251D] hover:bg-[#E8F5EC] border border-gray-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Learning Modules ({yearData.modules.length})</span>
          </button>

          <button
            onClick={() => { setActiveTab('tasks'); setIsExpanded(true); }}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'tasks' && isExpanded
                ? 'bg-[#087443] text-white shadow-xs'
                : 'bg-white text-[#17251D] hover:bg-[#E8F5EC] border border-gray-200'
            }`}
          >
            <ListTodo className="w-3.5 h-3.5" />
            <span>Practical Tasks ({yearData.tasks.length})</span>
          </button>

          <button
            onClick={() => { setActiveTab('projects'); setIsExpanded(true); }}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'projects' && isExpanded
                ? 'bg-[#087443] text-white shadow-xs'
                : 'bg-white text-[#17251D] hover:bg-[#E8F5EC] border border-gray-200'
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Recommended Projects ({yearData.suggestedProjects.length})</span>
          </button>

          <button
            onClick={() => { setActiveTab('milestones'); setIsExpanded(true); }}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'milestones' && isExpanded
                ? 'bg-[#087443] text-white shadow-xs'
                : 'bg-[#E8F5EC] text-[#065B35] hover:bg-[#d5ecd9] border border-[#087443]/30 font-bold'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Key Milestones ({completedCount}/{totalCount})</span>
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-auto p-2 text-xs font-medium text-[#66736B] hover:text-[#087443] flex items-center gap-1"
          >
            <span>{isExpanded ? 'Collapse' : 'Expand Details'}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Accordion / Expandable Content Body */}
      {isExpanded && (
        <div className="p-6 sm:p-8 animate-in fade-in duration-200">
          
          {/* TAB 1: Learning Modules */}
          {activeTab === 'modules' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <h4 className="text-base font-bold text-[#17251D] flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#087443]" />
                  Curriculum Learning Modules
                </h4>
                <span className="text-xs text-[#66736B]">Foundational to Advanced Depth</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {yearData.modules.map((mod, idx) => (
                  <div 
                    key={mod.id}
                    className="p-4 rounded-2xl bg-[#F8FAF8] hover:bg-[#E8F5EC]/40 border border-gray-100 hover:border-[#087443]/20 transition-all text-left"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-[#E8F5EC] text-[#087443] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <h5 className="text-sm font-bold text-[#17251D] leading-snug">{mod.title}</h5>
                        <p className="text-xs text-[#66736B] mt-1 leading-relaxed">{mod.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Practical Tasks */}
          {activeTab === 'tasks' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <h4 className="text-base font-bold text-[#17251D] flex items-center gap-2">
                  <ListTodo className="w-4 h-4 text-[#087443]" />
                  Hands-On Practical Tasks
                </h4>
                <span className="text-xs text-[#66736B]">Execute in Lab / Home Workspace</span>
              </div>
              <div className="space-y-3">
                {yearData.tasks.map((task, idx) => (
                  <div 
                    key={task.id}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#F8FAF8] border border-gray-100 text-left"
                  >
                    <div className="w-7 h-7 rounded-xl bg-[#E8F5EC] text-[#087443] flex items-center justify-center text-xs font-bold shrink-0">
                      T{idx + 1}
                    </div>
                    <span className="text-sm font-medium text-[#17251D]">{task.title}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Suggested Projects */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <h4 className="text-base font-bold text-[#17251D] flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-[#087443]" />
                  Recommended Year {yearData.yearNumber} Projects
                </h4>
                <span className="text-xs text-[#66736B]">Portfolio-Grade Software Artifacts</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {yearData.suggestedProjects.map((proj, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-[#F8FAF8] border border-gray-100 hover:border-[#087443]/30 transition-all flex flex-col justify-between text-left"
                  >
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#087443] mb-1">
                        Project Idea {idx + 1}
                      </div>
                      <h5 className="text-sm font-bold text-[#17251D] mb-1.5">{proj.name}</h5>
                      <p className="text-xs text-[#66736B] leading-relaxed">{proj.desc}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#087443] font-semibold">
                      <span>Add to GitHub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Key Milestones (WITH MARK AS COMPLETED INTERACTION!) */}
          {activeTab === 'milestones' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <div>
                  <h4 className="text-base font-bold text-[#17251D] flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#087443]" />
                    Interactive Milestone Verification
                  </h4>
                  <p className="text-xs text-[#66736B] mt-0.5">
                    Click "Mark as Completed" to track your progress. Data persists automatically in your browser.
                  </p>
                </div>
                <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-[#E8F5EC] text-[#065B35]">
                  {completedCount} of {totalCount} Done
                </span>
              </div>

              <div className="space-y-3">
                {yearData.milestones.map((ms, idx) => {
                  const completed = isMilestoneCompleted(ms.id);
                  return (
                    <div 
                      key={ms.id}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl border transition-all text-left ${
                        completed
                          ? 'bg-[#E8F5EC]/60 border-[#087443]/30 shadow-xs'
                          : 'bg-[#F8FAF8] border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start sm:items-center gap-3">
                        <button
                          onClick={() => toggleMilestone(yearData.yearNumber, ms.id, ms.title)}
                          className="mt-0.5 sm:mt-0 focus:outline-none"
                          aria-label={completed ? 'Mark uncompleted' : 'Mark completed'}
                        >
                          {completed ? (
                            <CheckCircle2 className="w-5 h-5 text-[#087443] fill-[#E8F5EC]" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400 hover:text-[#087443]" />
                          )}
                        </button>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#66736B]">M{idx + 1}</span>
                            <span className={`text-sm font-semibold ${completed ? 'text-[#065B35] line-through decoration-[#087443]/40' : 'text-[#17251D]'}`}>
                              {ms.title}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Button */}
                      <button
                        onClick={() => toggleMilestone(yearData.yearNumber, ms.id, ms.title)}
                        className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all self-end sm:self-auto ${
                          completed
                            ? 'bg-[#087443] text-white hover:bg-[#065B35] shadow-xs'
                            : 'bg-white text-[#17251D] hover:bg-[#E8F5EC] hover:text-[#087443] border border-gray-300'
                        }`}
                      >
                        {completed ? '✓ Completed' : 'Mark as Completed'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
};
