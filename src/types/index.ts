export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  goals: string[];
  stats: UserStats;
}

export interface UserStats {
  workoutsCompleted: number;
  caloriesBurned: number;
  minutesExercised: number;
  streakDays: number;
}

export interface Workout {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  calories: number;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  restTime: number;
  instructions: string[];
  muscleGroups: string[];
  videoUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}