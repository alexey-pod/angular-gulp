<div class="book_list"  ng-cloak="">
	<md-grid-list 
		md-cols-sm="3" 
		md-cols-md="4" 
		md-cols-lg="6"
		md-cols-gt-lg="7"
		md-cols="1" 
		md-gutter="15px" 
		md-gutter-sm="5px" 
		md-row-height="270"  
		>
		<md-grid-tile ng-repeat="item in book_array" class="grey md-whiteframe-z1" 
			ng-mouseenter="hover = 'md-whiteframe-z3'" 
			ng-mouseleave="hover = 'md-whiteframe-z1'" 
			ng-class="hover"	
		>
			<a href="/book/{{item.id}}/">
				<div class="image">
					<div class="inner">
						<image_checker file="https://storage.aggregion.com/api/files/{{item.cover}}/shared/data"></image_checker>
					</div>
				</div>
				<md-grid-tile-footer>
					<h3>{{item.title.default}}</h3>
				</md-grid-tile-footer>
			</a>
		</md-grid-tile>
	</md-grid-list>
</div>