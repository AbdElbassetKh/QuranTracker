import React from 'react';
import { useStore } from '../store/useStore';
import { StepSection } from './tracking/StepSection';
import { Checkbox } from './tracking/Checkbox';
import { Counter } from './tracking/Counter';
import { Notes } from './tracking/Notes';

export function DailyTracker() {
  const { currentPage, getTodayProgress, updateProgress } = useStore();
  const progress = getTodayProgress();

  const toggleStep = (step: string, value: boolean) => {
    updateProgress({ [step]: value });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Today's Progress - Page {currentPage}</h2>
      
      <div className="space-y-4">
        <StepSection title="1. Continuous Reading">
          <Checkbox
            checked={progress?.steps.continuousReading || false}
            onChange={() => toggleStep('continuousReading', !progress?.steps.continuousReading)}
            label="Read one Juz' in Hadr style"
          />
        </StepSection>

        <StepSection title="2. Preparation">
          <Checkbox
            checked={progress?.steps.preparation.weeklyPrep || false}
            onChange={() => toggleStep('preparation.weeklyPrep', !progress?.steps.preparation.weeklyPrep)}
            label="Weekly preparation completed"
          />
          <Checkbox
            checked={progress?.steps.preparation.nightlyPrep || false}
            onChange={() => toggleStep('preparation.nightlyPrep', !progress?.steps.preparation.nightlyPrep)}
            label="Nightly preparation (15 minutes)"
          />
          <Checkbox
            checked={progress?.steps.preparation.preMemorizationPrep || false}
            onChange={() => toggleStep('preparation.preMemorizationPrep', !progress?.steps.preparation.preMemorizationPrep)}
            label="Pre-memorization preparation"
          />
        </StepSection>

        <StepSection title="3. Listening">
          <Counter
            value={progress?.steps.listening.count || 0}
            onChange={(value) => updateProgress({ listening: { count: value, completed: value >= 3 } })}
            label="Listen to the page"
            max={3}
          />
        </StepSection>

        <StepSection title="4. Interpretation">
          <Notes
            value={progress?.steps.interpretation.notes || ''}
            onChange={(value) => updateProgress({ interpretation: { notes: value, completed: value.length > 0 } })}
            label="Tafsir Notes"
            placeholder="Record key points from the Tafsir..."
          />
        </StepSection>

        <StepSection title="5. Memorization">
          <Checkbox
            checked={progress?.steps.memorization.attentiveReading || false}
            onChange={() => toggleStep('memorization.attentiveReading', !progress?.steps.memorization.attentiveReading)}
            label="Attentive reading completed"
          />
          <Checkbox
            checked={progress?.steps.memorization.intensiveRepetition || false}
            onChange={() => toggleStep('memorization.intensiveRepetition', !progress?.steps.memorization.intensiveRepetition)}
            label="Intensive repetition completed"
          />
          <Notes
            value={progress?.steps.memorization.connectionNotes || ''}
            onChange={(value) => updateProgress({ memorization: { ...progress?.steps.memorization, connectionNotes: value } })}
            label="Connection Notes"
            placeholder="Note connections between pages..."
          />
        </StepSection>

        <StepSection title="6. Recording">
          <Checkbox
            checked={progress?.steps.recording.recorded || false}
            onChange={() => toggleStep('recording.recorded', !progress?.steps.recording.recorded)}
            label="Recorded 3 times"
          />
          <Checkbox
            checked={progress?.steps.recording.reviewed || false}
            onChange={() => toggleStep('recording.reviewed', !progress?.steps.recording.reviewed)}
            label="Reviewed recording"
          />
          <Checkbox
            checked={progress?.steps.recording.corrected || false}
            onChange={() => toggleStep('recording.corrected', !progress?.steps.recording.corrected)}
            label="Corrected errors"
          />
        </StepSection>

        <StepSection title="7. Repetition">
          <Counter
            value={progress?.steps.repetition.byHeartCount || 0}
            onChange={(value) => updateProgress({ repetition: { byHeartCount: value, completed: value >= 40 } })}
            label="Recite by heart"
            max={40}
          />
        </StepSection>

        <StepSection title="8. Yesterday's Review">
          <Counter
            value={progress?.steps.yesterdayRepetition.count || 0}
            onChange={(value) => updateProgress({ yesterdayRepetition: { count: value, completed: value >= 5 } })}
            label="Repeat yesterday's page"
            max={5}
          />
        </StepSection>

        <StepSection title="9. Linking">
          <Checkbox
            checked={progress?.steps.linking.completed || false}
            onChange={() => toggleStep('linking.completed', !progress?.steps.linking.completed)}
            label="Read both pages together"
          />
        </StepSection>
      </div>
    </div>
  );
}