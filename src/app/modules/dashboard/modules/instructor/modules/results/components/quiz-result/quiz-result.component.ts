import { Component, computed, inject, signal } from '@angular/core';
import { ResultService } from '../../services/result.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ClosedQuizResponse } from '../../models/quiz-result.model';
import { GroupService } from '../../../groups/services/group.service';
import { AllGroups } from '../../../groups/model/AllGroups-model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrl: './quiz-result.component.scss',
})
export class QuizResultComponent {
  private _resultService = inject(ResultService);
  private _groupService = inject(GroupService);
  quizResult = toSignal(this._resultService.getResult(), {
    initialValue: [] as ClosedQuizResponse[],
  });
  group = toSignal(this._groupService.getAllGroups(), {
    initialValue: [] as AllGroups[],
  });
  selectedResult = signal<
    (ClosedQuizResponse & { groupName: string; groupSize: number }) | null
  >(null);

  joinResult = computed(() => {
    const quizzes = this.quizResult();
    const groups = this.group();

    return quizzes.map((quiz) => {
      const groupInfo = groups.find((g) => g._id === quiz.quiz.group);
      return {
        ...quiz,
        groupName: groupInfo?.name ?? 'unknown',
        groupSize: groupInfo?.students?.length ?? 0,
      };
    });
  });
  viewDetails(result: any) {
    this.selectedResult.set(result);
  }

  closeDetails() {
    this.selectedResult.set(null);
  }
}
