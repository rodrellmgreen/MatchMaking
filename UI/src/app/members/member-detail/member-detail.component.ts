import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { MaterialModule } from 'src/app/material.module';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  standalone: true,
  imports: [MaterialModule, CommonModule, GalleryModule]
})
export class MemberDetailComponent implements OnInit {
  member: Member | undefined;
  images: GalleryItem[] = []

  constructor(private memberService: MemberService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMember()
  }
  loadMember(){
    var username =this.route.snapshot.paramMap.get('username');
    if(!username) return;
    this.memberService.getMember(username)
    .subscribe({
      next: member =>{
        this.member = member,
        this.getImages()}
    });
  }
  getImages(){
    if(!this.member) return;
    for (const photo of this.member.photos){
      this.images.push(new ImageItem({src:photo.url, thumb: photo.url}));
      
    }
  }

}
